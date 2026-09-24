import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { Field, Fieldset, Input, Label, Select } from '@headlessui/react';
import { cn } from 'cn';
import React, { useState } from 'react';

export const CreateItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <button
        onClick={() => setIsOpen(true)}
        className="flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-xl border border-gray-300 p-1 select-none hover:bg-black/5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
          />
        </svg>
        <span className="text-sm">Create</span>
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-xs" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="w-full max-w-md space-y-4 rounded-xl bg-white p-4">
            <DialogTitle className="border-b border-gray-200 pb-2 text-center font-bold">Create</DialogTitle>
            <Fieldset className="space-y-6 bg-white/5 pb-4">
              <Field>
                <Label className="text-sm/6 font-medium">Type</Label>
                <div className="relative">
                  <Select
                    className={cn(
                      'mt-3 block w-full appearance-none border-none bg-black/10 px-3 py-1.5 text-sm/6',
                      'rounded-xl focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                      '*:text-black',
                    )}
                  >
                    <option>File</option>
                    <option>Folder</option>
                  </Select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m4 9l8 8l8-8"
                    />
                  </svg>
                </div>
              </Field>
              <Field>
                <Label className="text-sm/6 font-medium">Name</Label>
                <Input
                  className={cn(
                    'mt-3 block w-full border-none bg-black/10 px-3 py-1.5 text-sm/6',
                    'rounded-xl focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                  )}
                />
              </Field>
            </Fieldset>
            <div className="flex items-center justify-end gap-x-4">
              <button
                className="cursor-pointer rounded-xl border border-gray-200 bg-black/5 px-4 py-1 hover:bg-black/10"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="cursor-pointer rounded-xl border border-gray-200 bg-green-500/80 px-4 py-1 hover:bg-green-500"
                onClick={() => setIsOpen(false)}
              >
                Create
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </React.Fragment>
  );
};
