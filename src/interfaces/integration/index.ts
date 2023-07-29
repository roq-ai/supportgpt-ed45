import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface IntegrationInterface {
  id?: string;
  type: string;
  settings: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface IntegrationGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  settings?: string;
  business_id?: string;
}
