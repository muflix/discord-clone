import { NavigationSideBar } from '@/components/navigation/navigation-sidebar'
import React from 'react'

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full'>
			{/* <div className='md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0'> */}
			{/* Do not know why but it doesn`t work for now */}
			<div className='hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0'>
				<NavigationSideBar />
			</div>
			<main className='md:pl-[72px] h-full'>{children}</main>
		</div>
	)
}

export default MainLayout
