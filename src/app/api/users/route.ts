export const GET = async () => {
  // const responseRaw = await fetch('http://localhost:8000/user', {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     Authorization: 'eyJhbGciOiJIUzI1NiJ9.Njg5N2E5MmZhMTA2ODcwNWUzMzgxZGUx.nWdzsXR_gIBgXMFyk58cI38XojWz1ziw9qcfnDUG5q4'
  //   },
  // })

  // const response = await responseRaw.json()

  // return Response.json(response.data)

  return Response.json([
    {
      id: 1,
      email: 'teste1@teste.com.br',
      isActive: true,
      isAdmin: true,
      lastLogin: '2025-01-01',
      name: 'Teste 1',
    },
    {
      id: 2,
      email: 'teste2@teste.com.br',
      isActive: false,
      isAdmin: false,
      lastLogin: '2025-10-01',
      name: 'Teste 2',
    },
  ])
}

export default GET