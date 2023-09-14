import React from 'react';
import ContactItems from '../../../components/contactItems/ContactItems';
import './AdminContacts.css';
import AdminDashSide from './AdminDashSide/AdminDashSide';

function AdminContacts({ API_URL }) {
  return (
    <div>
        <AdminDashSide />
        <ContactItems API_URL={API_URL} />
    </div>
  )
}

export default AdminContacts;


