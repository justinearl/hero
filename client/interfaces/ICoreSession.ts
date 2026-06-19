import IDataSnippet from '@justinearl/hero-interfaces/IDataSnippet';
import IDetachedElement from '@justinearl/hero-interfaces/IDetachedElement';
import IDetachedResource from '@justinearl/hero-interfaces/IDetachedResource';
import ITypedEventEmitter from '@justinearl/commons/interfaces/ITypedEventEmitter';

// This interface exists for DatastoreInternal to import

export default interface ICoreSession extends ITypedEventEmitter<{ close: void }> {
  sessionId: string;
  setSnippet(key: string, value: any): Promise<void>;
  getSnippets(sessionId: string, key: string): Promise<IDataSnippet[]>;
  getCollectedAssetNames(
    sessionId: string,
  ): Promise<{ resources: string[]; elements: string[]; snippets: string[] }>;
  getDetachedElements(sessionId: string, name: string): Promise<IDetachedElement[]>;
  getDetachedResources(sessionId: string, name: string): Promise<IDetachedResource[]>;
  recordOutput(changes: IOutputChangeToRecord[]): void;
}

export interface IOutputChangeToRecord {
  type: string;
  value: any;
  path: string;
  timestamp: number;
}
