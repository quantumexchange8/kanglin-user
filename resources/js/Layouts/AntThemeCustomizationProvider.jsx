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
                    }
                }
            }}
        >
            <StyleProvider hashPriority='high'>{children}</StyleProvider>
        </ConfigProvider>
    )
}

export default AntThemeCustomizationProvider;