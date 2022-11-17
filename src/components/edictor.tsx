import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import { curl, javaScript, nodeJs, php, Python } from '../constanst/ApiDoc';

const myTheme = createTheme({
    theme: 'light',
    settings: {
        background: '#160A4B',
        foreground: '#75baff',
        caret: '#5d00ff',
        selection: '#036dd626',
        selectionMatch: '#036d626',
        lineHighlight: '#160A4B',
        gutterBackground: '#160A4B',
        gutterForeground: '#8a919966',
    },
    styles: [
        { tag: t.comment, color: '#787b8099' },
        { tag: t.variableName, color: 'cyan' },
        { tag: [t.string, t.special(t.brace)], color: 'green' },
        { tag: t.number, color: '#5c6166' },
        { tag: t.bool, color: '#5c6166' },
        { tag: t.null, color: '#5c6166' },
        { tag: t.keyword, color: '#5c6166' },
        { tag: t.operator, color: '#5c6166' },
        { tag: t.className, color: '#5c6166' },
        { tag: t.definition(t.typeName), color: '#5c6166' },
        { tag: t.typeName, color: '#5c6166' },
        { tag: t.angleBracket, color: '#5c6166' },
        { tag: t.tagName, color: '#5c6166' },
        { tag: t.attributeName, color: '#5c6166' },
    ],
});


function Edictor() {
    const [code, setcode] = useState<string>(nodeJs)

    const [tab, settab] = useState('nodejs')

    // useEffect(() => {
    //  setcode()
    // }, [])
    


    const handleTab = (value: string) => {
        settab(value)
        if (value === 'nodejs') {
            setcode(nodeJs)
        }
        else if (value === 'python') {
            setcode(Python)
        } else if (value === 'php') {
            setcode(php)
        }else if(value === 'js'){
            setcode(javaScript)
        }else if(value === 'curl'){
            setcode(curl)
        }

        console.log(code)
    }







    return (
        <div className='set-edictor p-3'>
            <div className='edict-content  px-4 pt-4'>
                <div className="mb-3">
                    <button
                        onClick={() => handleTab('nodejs')}
                        className={tab === 'nodejs' ? "e-active-tab" : "e-inactive-tab"}>
                        Node Js
                    </button>
                    <button
                        onClick={() => handleTab('php')}
                        className={tab === 'php' ? "e-active-tab" : "e-inactive-tab"}>
                        PHP
                    </button>
                    <button
                        onClick={() => handleTab('python')}
                        className={tab === 'python' ? "e-active-tab" : "e-inactive-tab"}>
                        Python
                    </button>
                    <button
                        onClick={() => handleTab('js')}
                        className={tab === 'js' ? "e-active-tab" : "e-inactive-tab"}>
                        Javascript
                    </button>
                    <button
                        onClick={() => handleTab('curl')}
                        className={tab === 'curl' ? "e-active-tab" : "e-inactive-tab"}>
                        Curl
                    </button>

                </div>
                <div className='edictor-wrapper'>

                    <CodeMirror
                        value={code}
                        theme={myTheme}
                        editable={false}
                        extensions={[javascript({ jsx: true })]}
                        onChange={(value, viewUpdate) => {
                            console.log('value:', value);
                        }}
                    />

                </div>
            </div>
        </div>


    );
}
export default Edictor;
