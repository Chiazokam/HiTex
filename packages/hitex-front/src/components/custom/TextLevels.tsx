'use client'

import { type Editor } from "@tiptap/react";
import { useState } from 'react';
import { Combobox, InputBase, useCombobox } from '@mantine/core';
import { ChevronDownIcon } from '@/components/Icons';

type TextLevelsProps = {
    editor: Editor | null
}

const textLevels = [
    { label: 'Paragraph', value: 'paragraph' },
    { label: 'Heading 1', value: 'h1' },
    { label: 'Heading 2', value: 'h2' },
    { label: 'Heading 3', value: 'h3' },
    { label: 'Heading 4', value: 'h4' },
    { label: 'Heading 5', value: 'h5' },
    { label: 'Heading 6', value: 'h6' },
]

const options = textLevels.map((level) => (
    <Combobox.Option value={level.value} key={level.value}>
      {level.label}
    </Combobox.Option>
  ));

export const TextLevels = ({ editor }: TextLevelsProps) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string>('Paragraph');

    if (!editor) {
        return null
    }

  type Level = 1 | 2 | 3 | 4 | 5 | 6

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(value) => {
        const selected = textLevels.find(level => level.value === value)
        selected && setValue(selected.label)
        if (value === 'paragraph') {
            editor.chain().focus().setParagraph().run()
        } else {
            editor.chain().focus().toggleHeading({ level: Number(value.substring(1)) as Level}).run()
        }
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          classNames={{
            input: 'border-0 text-xs text-zinc-600',
            root: 'w-[120px]',
          }}
          rightSection={<ChevronDownIcon className='w-3 h-3' />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
        >
          {value}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options className="text-xs text-zinc-600">{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
