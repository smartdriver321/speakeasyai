'use client'

import { z } from 'zod'

import { Input } from '../ui/input'
import { Button } from '../ui/button'

const schema = z.object({
	file: z
		.instanceof(File, { message: 'Invalid file' })
		.refine(
			(file) => file.size <= 20 * 1024 * 1024,
			'File size must not exceed 20MB'
		)
		.refine(
			(file) =>
				file.type.startsWith('audio/') || file.type.startsWith('video/'),
			'File must be an audio or a video file'
		),
})

export default function UploadForm() {
	return (
		<form className='flex flex-col gap-6' action=''>
			<div className='flex justify-end items-center gap-1.5'>
				<Input
					id='file'
					name='file'
					type='file'
					accept='audio/*,video/*'
					required
				/>
				<Button className='bg-purple-600'>Transcribe</Button>
			</div>
		</form>
	)
}
