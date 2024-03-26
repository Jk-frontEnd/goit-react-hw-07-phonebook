import { createAction } from "@reduxjs/toolkit";

//pending
export const fetchRequest = createAction('contacts/fetchAll');
//fulfilled
export const fetchRequestSuccess = createAction('contacts/done');
// rejected
export const fetchRequestRejected = createAction('contacts/fail');
