import { javascript } from '@codemirror/lang-javascript';
import { Box } from '@mantine/core';
import { githubLight } from '@uiw/codemirror-theme-github';
import ReactCodeMirror from '@uiw/react-codemirror';

import useStyles from './CodeEditor.styles';

type CodeEditorType = {
  code: string;
  isActive: boolean;
  onChange?: (code: string) => void;
};

const CodeEditor = ({ code, isActive, onChange }: CodeEditorType) => {
  const { classes } = useStyles();

  return (
    <Box
      className={classes.editor}
      component={ReactCodeMirror}
      value={code}
      extensions={[javascript()]}
      theme={githubLight}
      basicSetup={{
        foldGutter: false,
        lineNumbers: false,
      }}
      readOnly={!isActive}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
