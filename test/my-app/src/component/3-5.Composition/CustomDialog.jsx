import React from 'react'
import Dialog from './Dialog'
Dialog.Content = ({title, description}) => {
    return (
        <>
        <Dialog.Title title={title}>
        
        </Dialog.Title>
        <Dialog.Description description={{description}}>
            
        </Dialog.Description>
        </>
    )   
}
export default function CustomDialog() {
    return (
        <Dialog>
            {/* <Dialog.Content title="안내" description="이것은 멋진 내용을 담고있는 안내입니다." /> */}0
            <Dialog.Content title="하 되라" description="이것도 되니?"/>
        </Dialog>
        
    )
}
