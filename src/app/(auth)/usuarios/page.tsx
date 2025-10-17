'use client';

import ButtonCreate from '@/components/atoms/ButtonCreate';
import { useMenu } from '@/contexts/MenuContext';
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';

import * as S from './style';

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
  lastLogin: string;
}

export const UsuariosPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { toggleMenu } = useMenu();

  const fetchData = async () => {
    const url = '/api/users';

    const responseRaw = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    // const responseRaw = await fetch('http://localhost:8000/user', {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     Authorization:
    //       'eyJhbGciOiJIUzI1NiJ9.Njg5N2E5MmZhMTA2ODcwNWUzMzgxZGUx.nWdzsXR_gIBgXMFyk58cI38XojWz1ziw9qcfnDUG5q4',
    //   },
    // });

    const response = await responseRaw.json();

    setUsers(response);
  };

  useEffect(() => {
    console.log(
      'Aqui eu quero popular o estado de users com os usuários vindos de uma API'
    );

    fetchData();
  }, []);

  return (
    <S.UsersContainer>
      <div className="flex justify-between items-center mb-6">
        <div onClick={() => toggleMenu()}>
          Total de 5 funcionários cadastrados
        </div>
        <ButtonCreate />
      </div>

      <TableContainer component={Paper}>
        <S.TablelaDeUsuarios aria-label="Tabela de Usuários">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Permissão</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Último Login</TableCell>
              <TableCell align="center" colSpan={2}>
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">
                  {user.isAdmin ? 'Administrador' : 'Funcionário'}
                </TableCell>
                <TableCell align="right">
                  {user.isActive ? 'Ativo' : 'Inativo'}
                </TableCell>
                <TableCell align="right">{user.lastLogin}</TableCell>
                <TableCell align="right">Edita</TableCell>
                <TableCell align="right">Remover</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </S.TablelaDeUsuarios>
      </TableContainer>
    </S.UsersContainer>
  );
};

export default UsuariosPage;
