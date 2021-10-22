export class EquipmentDetail {
  equipmentId: number = 0;
  nserie: null;
  name: null;
  model: null;
  category: null;
  imei: null;
  equipmentstock:null;
  carctetis: null;
  accesories: null;
  codigo: null;
}
export class EquipmentAsignation {
  idAsigment: number = 0;
  equipmentstock: null;
  allasigned: null;
}
export class UsersUpdate{
  userid: number=0;
  dni:null;
  nameuser: null;
  sur_paternal: null;
  sur_maternal: null;
  direction: null;
  tel: null;
  email: null;
  departament: null;
  puesto: null;
}
export class UsersEquipment{
  idue: number=0;
  equipmentstocku: null;
  allasignedu: null;
}

