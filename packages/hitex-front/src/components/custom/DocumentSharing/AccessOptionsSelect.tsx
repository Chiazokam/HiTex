import { useState } from 'react';
import { Select, SelectProps } from '@mantine/core'
import { GlobeAltIcon, LockClosedIcon, ChevronDownIcon } from '@/components/custom/Icons/heroIcons';

const AccessOptionsSelect = () => {
    const [value, setValue] = useState<string | null>('restricted');

    const icons: Record<string, React.ReactNode> = {
        public: <GlobeAltIcon className='w-4 h-4 text-zinc-700' />,
        restricted: <LockClosedIcon className='w-4 h-4 text-zinc-700' />
    }

    const subLabels: Record<string, string> = {
        public: 'Anyone with the link can view',
        restricted: 'Only people invited can access'
    }

    const RenderOption: SelectProps['renderOption'] = ({ option }) => {
        return (
            <div className='flex items-center gap-2'>
                <div className=''>{icons[option.value]}</div>
                <div className='flex flex-col'>
                    <span className='text-zinc-700 text-sm'>{option.label}</span>
                    <span className='text-xs text-zinc-500'>{subLabels[option.value]}</span>
                </div>
            </div>
        )
    }
    
    return (
   
        <Select
            classNames={{
                wrapper: 'xs:w-64',
                input: 'border border-zinc-50 rounded-full text-sm text-zinc-700 hover:bg-zinc-50'
            }}
            value={value}
            onChange={(value) => setValue(value)}
            data={[
                { value: 'public', label: 'Anyone with the link' },
                { value: 'restricted', label: 'Restricted' }
              ]}
            // leftSection={icons[value || 'restricted']}
            rightSection={<ChevronDownIcon className='w-3 h-3 text-zinc-700' />}
            renderOption={RenderOption}
            comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
        />
    )
}

export default AccessOptionsSelect
