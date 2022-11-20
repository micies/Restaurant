import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Puttables from './components/tables/put';
import HomeTabes from './components/tables/TableTables';
import GetIdTables from './components/tables/get_by_id';
// import HomeDiners from './components/diners/_HomeAndDelete';
import CreateDiners from './components/diners/post';
import GetIdDiners from './components/diners/get_by_id';
import PutDiners from './components/diners/put.js';
import HomeMenu from './components/menu/TableMenu';
import GetIdMenu from './components/menu/get_by_id';
import Reservation from './components/diners/reservation';
import { PutDinersClass } from './components/dinersClass/putClass';
import { PostDinersClass } from './components/dinersClass/postClass';
import { GetByIdDinersClass } from './components/dinersClass/getByIdClass';
import { HomeDinersClass } from './components/dinersClass/home';
import { PutMenuClass } from './components/menuClass/putClass';
import { PostMenuClass } from './components/menuClass/postClass';
import { GetByIdMenuClass } from './components/menuClass/getByIdClass';
import { HomeMenuClass } from './components/menuClass/home';
import { PutTablesClass } from './components/tablesClass/putClass';
import { PostTablesClass } from './components/tablesClass/postClass';
import { GetByIdTablesClass } from './components/tablesClass/getByIdClass';
import { HomeTablesClass } from './components/tablesClass/home';
import { ReservationClass } from './components/dinersClass/reservationClass';
import PostTables from './components/tables/post';
import UpdateMenu from './components/menu/put';
import CreateMenu from './components/menu/post';
import DinersTable from './components/diners/TableDiners'



export default function RoutesRestuarant() {
    return(


  
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/tables/post' element={<PostTables />} />
      <Route path='/tables' element={<HomeTabes />} />
      <Route path='/tables/:id' element={<GetIdTables />} />
      <Route path='/tables/put/:id' element={<Puttables />} />
      
      <Route path='/diners/reservations/:id' element={<Reservation />} />
      <Route path='/diners' element={<DinersTable />} />
      <Route path='/diners/post' element={<CreateDiners />} />
      <Route path='/diners/:id' element={<GetIdDiners />} />
      <Route path='/diners/put/:id' element={<PutDiners />} />
      
      <Route path='/menu' element={<HomeMenu />} />
      <Route path='/menu/post' element={<CreateMenu />} />
      <Route path='/menu/:id' element={<GetIdMenu />} />
      <Route path='/menu/put/:id' element={<UpdateMenu />} />
     
      <Route path='/test/:id' element={<Reservation/>}  />
      <Route path='/dinersClass/put/:id' element={<PutDinersClass/>}  />
      <Route path='/dinersClass/post' element={<PostDinersClass/>}  />
      <Route path='/dinersClass/:id' element={<GetByIdDinersClass/>}  />
      <Route path='/dinersClass' element={<HomeDinersClass/>}  />
     
      <Route path='/menuClass/put/:id' element={<PutMenuClass/>}  />
      <Route path='/menuClass/post' element={<PostMenuClass/>}  />
      <Route path='/menuClass/:id' element={<GetByIdMenuClass/>}  />
      <Route path='/menuClass' element={<HomeMenuClass/>}  />
     
      <Route path='/tablesClass/put/:id' element={<PutTablesClass/>}  />
      <Route path='/tablesClass/post' element={<PostTablesClass/>}  />
      <Route path='/tablesClass/:id' element={<GetByIdTablesClass/>}  />
      <Route path='/tablesClass' element={<HomeTablesClass/>}  />
      
      <Route path='/reservationClass' element={<ReservationClass/>}  />
      
    </Routes>
  </Router>
)};

