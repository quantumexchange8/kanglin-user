import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';

function AntThemeCustomizationProvider({ children }) {
    return (
        <ConfigProvider
            theme={{
                cssVar: true,
                hashed: false,
                token: {
                    colorPrimary: '#531985', // primary color gray-950
                    borderRadius: 5,
                    fontFamily: 'Inter'
                },
                components: {
                    InputNumber: {
                        
                    },
                    Carousel: {
                        // dotOffset: '20px'
                    },
                    Select: {
                        controlHeight: '44px',
                        padding: '8px 16px',
                        optionHeight: '36px',
                        optionFontSize: '14px',
                        optionLineHeight: '20px',
                        optionPadding: '8px 16px',
                    },
                    Rate: {
                        starSize: '16px'
                    },
                    InputNumber: {
                        paddingBlock: '12px',
                        paddingInline: '12px',
                    },
                    Progress: {
                        defaultColor: '#7C4696',
                    },
                    Badge: {
                        textFontSize: '8px',
                    }
                }
            }}
        >
            <StyleProvider hashPriority='high'>{children}</StyleProvider>
        </ConfigProvider>
    )
}

export default AntThemeCustomizationProvider;