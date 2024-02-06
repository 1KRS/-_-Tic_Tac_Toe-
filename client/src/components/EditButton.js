const EditButton = ({onClick, isEditing}) => {
  return (
    <button onClick={onClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
  )
}
export default EditButton