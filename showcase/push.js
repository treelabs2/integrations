exports.page = {
    props: [
        {
            name: 'local_code',
            value: 'https://withtree.com'
        },
        {
            name: 'remote_code',
            value: 'https://withtree.com'
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
            type: 'multiselect',
            value: {
                items: [
                    'チャンネル１',
                    'チャンネル２',
                    'チャンネル３',
                    'チャンネル４',
                    'チャンネル５'
                ]
            },
            attrs: {
                label: 'チャンネルを選択して下さい'
            }
        },
        
              {
            type: 'input',
            attrs: {
                placeholder: 'Enter your name',
                label: 'Name',
                capitalize: 'characters'
            }
        },
        {
            type: 'input',
            value: '123456',
            attrs: {
                label: 'Password',
                secure: true
            }
        },
        {
            type: 'heading4',
            value: 'メッセージ'
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
            value: 'PUSH送信を送ります TEST',
            attrs: {
                onClick: {
                    action: 'post',
                    payload: {
                        url: 'https://bpms.bpmboxes.com/djiango/api/v1/sendPush/',
                        params: {
                            message: '239399dklwiudsljewjljewewjlew',test:'ssssssssssssss'
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
