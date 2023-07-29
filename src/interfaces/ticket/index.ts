import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface TicketInterface {
  id?: string;
  status: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface TicketGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  business_id?: string;
}
