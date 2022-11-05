import { Stack, Flex } from '@chakra-ui/react'
import { ColorModeSwitch } from '@components/ColorModeSwitch/'
export const Header = () => {
  return (
    <Stack as={'header'} w='full' px='2rem' h='3.5rem' alignItems='center' justifyContent='center'>
      <Flex w='full' border='1px' maxW='1120px' justifyContent='space-between'>
        <ColorModeSwitch />
      </Flex>
    </Stack>
  )
}
