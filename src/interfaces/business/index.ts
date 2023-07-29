import { IntegrationInterface } from 'interfaces/integration';
import { TicketInterface } from 'interfaces/ticket';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  integration?: IntegrationInterface[];
  ticket?: TicketInterface[];
  user?: UserInterface;
  _count?: {
    integration?: number;
    ticket?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
