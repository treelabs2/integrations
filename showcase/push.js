exports.page = {
    props: [
        {
            name: 'local_code',
            value: 'https://withtree.com'
        },
        {
            name: 'remote_code',
            value: 'https://withtree.com'
        },
                {
                    name: 'firstName',
                    type: 'text',
                    value: 'firstName'
                },
                {
                    name: 'lastName',
                    type: 'text',
                    value: 'lastName'
                }
    ],
    blocks: [
    {
            type: 'link',
            value: 'Documentation: Actions →',
            attrs: {
                url: 'https://treedocs.vercel.app/docs/v1/hooks/ui/actions/'
            }
        },
         {
                type: 'text',
                value: '送信先選択'
            },
        {
            type: 'multiselect',
            value: {
                items: [
                    '全員に送信',
                    'チャンネル１',
                    'チャンネル２',
                    'チャンネル３',
                    'チャンネル４'
                ]
            },
            attrs: {
                label: 'チャンネルを選択して下さい'
            }
        },
        
              {
            type: 'input',
            bindToProp: 'username',   
            attrs: {
                placeholder: 'Enter your name',
                label: 'ユーザー名',
                capitalize: 'characters'
            }
        },
        {
            type: 'input',
            value: '123456',
            bindToProp: 'password',
            attrs: {
                label: 'パスワード',
                secure: true
            }
        },
        {
            type: 'heading4',
            value: '送信先選択'
        },
        {
            type: 'input',
            attrs: {
                placeholder: 'メッセージを入れてください',
                multiline: true
            }
        },
         {
            type: 'button',
            value: 'PUSH送信をします',
            attrs: {
                onClick: {
                    action: 'post',
                    payload: {
                        url: 'https://bpms.bpmboxes.com/djiango/api/v1/sendPush/',
                        params: {
                            message: '239399dklwiudsljewjljewewjlew',test:'ssssssssssssss',
                            firstName: '${prop("firstName")}',
                                    lastName: '${prop("lastName")}'
                        }
                    },
                    onSuccess: {
                        action: 'notify',
                        payload: {
                            message: 'Success. Got back: ${get(get(response, "json"), "message")}.'
                        }
                    },
                    onError: {
                        action: 'notify',
                        payload: {
                            message: 'Error: ${get(error, "message")}'
                        }
                    }
                }
            }
        },
      
    ]
}
