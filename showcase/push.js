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
                value: '送信グループ選択'
            },
        {
    "type": "dropdown",
    "value": {
        "items": ["全員","",""],
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
            type: 'text',
            value: '送信内容'
        },
        {
            type: 'input',
            attrs: {
                placeholder: 'メッセージを入れてください',
                multiline: true
            }
        },
         {
            type: 'text',
            value: 'PUSH送信をします'
        },
         {
            type: 'button',
            value: 'PUSH通知を送ります',
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
