'use client'

import { X } from 'lucide-react'
import Image from 'next/image'
import { UploadDropzone } from '@/lib/uploadthing'
import { useState } from 'react'

interface FileUploadProps {
	onChange: (url?: string) => void
	value: string
	endpoint: 'messageFile' | 'serverImage'
}

interface UploadResponse {
	url: string
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
	const [isLoading, setIsLoading] = useState(false)
	const fileType = value?.split('.').pop()

	const handleUploadComplete = (res: UploadResponse[]) => {
		setIsLoading(false)
		onChange(res?.[0]?.url)
	}

	const handleUploadError = (error: Error) => {
		setIsLoading(false)
		console.error(error)
	}

	return value && fileType !== 'pdf' ? (
		<div className='relative h-20 w-20'>
			<Image fill src={value} alt='Upload' className='rounded-full' />
			<button
				onClick={() => onChange('')}
				className='bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm'
			>
				<X className='h-4 w-4' />
			</button>
		</div>
	) : (
		<div className='space-y-2'>
			<UploadDropzone
				endpoint={endpoint}
				onClientUploadComplete={handleUploadComplete}
				onUploadError={handleUploadError}
				onClientUploadStart={() => setIsLoading(true)}
			>
				{({ getRootProps, getInputProps }) => (
					<div
						{...getRootProps()}
						className='mt-2 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 text-center'
						role='presentation'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							className='mx-auto block h-12 w-12 text-gray-400'
						>
							<path
								fill='currentColor'
								fillRule='evenodd'
								d='M5.5 17a4.5 4.5 0 0 1-1.44-8.765a4.5 4.5 0 0 1 8.302-3.046a3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z'
								clipRule='evenodd'
							/>
						</svg>
						<label className='relative mt-4 flex w-64 cursor-pointer items-center justify-center text-sm font-semibold leading-6 text-gray-600'>
							<input {...getInputProps()} className='sr-only' />
							<span className='hover:text-blue-500'>
								Choose a file or drag and drop
							</span>
						</label>
						<div className='m-0 h-[1.25rem] text-xs leading-5 text-gray-600'>
							Image (4MB)
						</div>
						<button className='relative mt-4 flex h-10 w-36 rounded-md text-base text-white bg-blue-600'>
							{isLoading ? 'Uploading...' : 'Choose File'}
						</button>
					</div>
				)}
			</UploadDropzone>
		</div>
	)
}
