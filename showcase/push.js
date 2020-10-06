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
            type: 'input',
            value: 'Disabled',
            attrs: {
                label: 'Status',
                disabled: true
            }
        },
        {
            type: 'heading4',
            value: 'Comment'
        },
        {
            type: 'input',
            attrs: {
                placeholder: 'Enter a comment',
                multiline: true
            }
        },
       
        {
            type: 'button',
            value: 'Generate New',
            attrs: {
                fill: true,
                onClick: {
                    action: 'updateProps',
                    payload: {
                        props: [
                            {
                                name: 'local_code',
                                newValue: 'code:${toString(rand())}'
                            }
                        ]
                    }
                }
            }
        },
      
    ]
}
