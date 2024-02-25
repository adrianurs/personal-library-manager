import { Dispatch, SetStateAction } from 'react'

export interface IViewSelectionProps {
	view: 'table' | 'stack'
	setView: Dispatch<SetStateAction<'table' | 'stack'>>
}
