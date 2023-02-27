function MailBox(){
    const unreadMsg =['msg-1','msg-2','msg-3']
    return(
        <div>
            {
                unreadMsg.length>0 &&
                <h3>You have {unreadMsg.length} unread messages </h3>
            }
        </div>
    )
}

export default MailBox;