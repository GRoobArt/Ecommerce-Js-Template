const UUID = () => {
  let UUID = crypto.randomUUID()
  let arrayID = UUID.split('-')

  return arrayID[0]
}

export default UUID
