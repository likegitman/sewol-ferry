interface Props {
  checked: boolean
}

const CheckBox = ({ checked }: Props) => {
  return (
    <>
      <input
        type='checkbox'
        className='w-4 h-4 mt-[2px] rounded-md cursor-pointer bg-[#5A5A5A] appearance-none checked:bg-[#FDCF00]'
        checked={checked}
      />
      {checked && (
        <img src='/svg/check.svg' className='absolute ml-1 mt-[7px]' />
      )}
    </>
  )
}
export default CheckBox
