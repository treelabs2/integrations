exports.page = {
    props: [
        {
            name: 'counter',
            value: 1
        }
    ],
    blocks: [
        {
            type: 'heading2',
            value: 'Actions',
        },
        {
            type: 'link',
            value: 'Documentation: Actions →',
            attrs: {
                url: 'https://treedocs.now.sh/docs/v1/hooks/ui/actions/'
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
            value: 'PUSH送信を送ります',
            attrs: {
                onClick: {
                    action: 'post',
                    payload: {
                        url: 'https://bpms.bpmboxes.com/djiango/api/v1/sendPush/',
                        params: {
                            message: 'Ping'
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
      
        
        {
            type: 'divider'
        },
        {
            type: 'button',
            value: 'Notify',
            attrs: {
                onClick: {
                    action: 'notify',
                    payload: {
                        message: 'Notification sent ${format(today())}.',
                        type: 'success'
                    }
                }
            }
        },
        {
            type: 'button',
            value: 'Open URL',
            attrs: {
                onClick: {
                    action: 'open',
                    payload: {
                        url: 'https://withtree.com'
                    }
                }
            }
        },
        {
            type: 'button',
            value: 'Open Page',
            attrs: {
                onClick: {
                    action: 'open',
                    payload: {
                        pageId: 'welcome'
                    }
                }
            }
        },
        {
            type: 'button',
            value: 'Counter ${prop("counter")}',
            attrs: {
                onClick: {
                    action: 'updateProps',
                    payload: {
                        props: [
                            {
                                name: 'counter',
                                newValue: '${add(prop("counter"), 1)}'
                            }
                        ]
                    }
                }
            }
        },
        {
            type: 'button',
            value: 'Send GET Request',
            attrs: {
                onClick: {
                    action: 'fetch',
                    payload: {
                        url: 'https://picsum.photos/v2/list?limit=10',
                    },
                    onSuccess: {
                        action: 'notify',
                        payload: {
                            message: 'Success: got ${length(response)} results.'
                        }
                    },
                    onError: {
                        action: 'notify',
                        payload: {
                            message: '${get(error, "message")}'
                        }
                    }
                }
            }
        },
        {
            type: 'button',
            value: 'Send POST Request',
            attrs: {
                onClick: {
                    action: 'post',
                    payload: {
                        url: 'https://httpbin.org/post',
                        params: {
                            message: 'Ping'
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
        {
            type: 'image',
            value: 'https://source.unsplash.com/800x600/?forest',
            attrs: {
                format: 'landscape',
                caption: 'Click me!',
                onClick: {
                    action: 'notify',
                    payload: {
                        message: 'Image clicked!',
                        type: 'success'
                    }
                }
            }
        }
    ]
}
