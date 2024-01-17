import ExampleTheme from "./themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import ActionsPlugin from "./plugins/ActionsPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import './lexical_styles.css';

import { useEffect, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

function Placeholder() {
  return (
    <div className="editor-placeholder">
      Type / for menu or select from Templates
    </div>
  );
}

function TextContentListener({ onChange }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        return editor.registerTextContentListener((text) => {
            onChange(text);
        });
    }, [editor, onChange]);
}

const editorConfig = {  
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};

export default function Editor({ data }) {
  const date = moment().format("YYYY-MM-DD HH:mm:ss");
  const [textValue, setTextValue] = useState("");

  function onChange(text) {
    if (text.trim() != "") { 
        setTextValue(text);
    } else setTextValue(text.trim());
    // data({id: uuidv4(), createdAt: date, data: textValue});
  };
//   console.log(textValue);

  const [editorState, setEditorState] = useState();
  
  const OnChangePlugin = ({ onChanges }) => {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
      return editor.registerUpdateListener(({ editorState }) => {
        onChanges(editorState);
      });
    }, [editor, onChanges]);
  };
  
  function onChanges(editorState) {
    const editorStateJSON = editorState.toJSON();
    setEditorState(editorStateJSON);
    data({id: uuidv4(), createdAt: date, data: editorStateJSON});
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
          />
          <AutoFocusPlugin />
          <ListPlugin />
          <LinkPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <CodeHighlightPlugin />
        </div>
        <ActionsPlugin />
      </div>
      <TextContentListener onChange={onChange} />
      <OnChangePlugin onChanges={onChanges} />
    </LexicalComposer>
  );
}
