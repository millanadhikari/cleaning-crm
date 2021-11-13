import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="py-16">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-gray-400' : 'bg-gray-200'}
          relative inline-flex flex-shrink-0 h-[25px] w-[40px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  )
}
