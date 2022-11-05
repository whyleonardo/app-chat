import { useEffect, useState } from 'react'
import { supabase } from '@services/SupabaseClient'

interface AvatarProps {
  url: string
  size: number
  onUpload: (filePath: string) => void
}

export const Avatar = ({ url, size, onUpload }: AvatarProps) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])

  const downloadImage = async (path: string) => {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      setAvatarUrl(url)
    } catch (error) {
      console.log('Error downloading image: ', error)
    }
  }

  const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      alert(error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div style={{ width: size }} aria-live='polite'>
      <img
        src={avatarUrl ? avatarUrl : `https://place-hold.it/${size}x${size}`}
        alt={avatarUrl ? 'Avatar' : 'No image'}
        className='avatar image'
        style={{ height: size, width: size }}
      />
      {uploading ? (
        'Uploading...'
      ) : (
        <>
          <label className='button primary block' htmlFor='single'>
            Upload an avatar
          </label>
          <div className='visually-hidden'>
            <input
              type='file'
              id='single'
              accept='image/*'
              onChange={uploadAvatar}
              disabled={uploading}
            />
          </div>
        </>
      )}
    </div>
  )
}
