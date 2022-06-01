import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    RadioGroup,
    useDisclosure,
    Stack,
    Radio,
    Button,
  } from '@chakra-ui/react'

 export function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
            {/* <Radio value='top'>Top</Radio>
            <Radio value='right'>Right</Radio>
            <Radio value='bottom'>Bottom</Radio>
            <Radio value='left'>Left</Radio> */}
          </Stack>
        </RadioGroup>
        <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Logo</DrawerHeader>
            <DrawerBody>
               
               <br />
           
               <p> Home</p>
               <br />
              <p>trending</p>
              <br />
              <p>Explore</p>
              <br />
              <p>Favorites</p>
              <br />
              <p>Help</p>
              <br />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }