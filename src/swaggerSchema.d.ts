declare namespace Components {
  namespace Schemas {
    export interface PingResponse {
      message: string;
    }
  }
}
declare namespace Paths {
  namespace GetMessage {
    namespace Responses {
      export type $200 = Components.Schemas.PingResponse;
    }
  }
}
