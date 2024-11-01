'use client'

import { CreateServerModal } from '@/components/modals/create-server-modal'
import { useEffect, useState } from 'react'

import { CreateChannelModal } from '@/components/modals/create-channel-modal'
import { DeleteServerModal } from '@/components/modals/delete-server-modal'
import { EditSeverModal } from '@/components/modals/edit-server-modal'
import { InviteModal } from '@/components/modals/invite-modal'
import { LeaveServerModal } from '@/components/modals/leave-server-modal'
import { MembersModal } from '@/components/modals/members-modal'

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}

	return (
		<>
			<CreateServerModal />
			<InviteModal />
			<EditSeverModal />
			<MembersModal />
			<CreateChannelModal />
			<LeaveServerModal />
			<DeleteServerModal />
		</>
	)
}
