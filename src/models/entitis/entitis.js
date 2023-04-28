const entitiesInfo = {
  "adm_action": {
    "attributes": {
      "id": "number",
      "site": "number",
      "code": "string", 
      "text": "string",  
      "valid": "number"     
    }
  },
  "adm_blacklist_tokens": {
    "attributes": {
      "id": "number",
      "site": "number",
      "token": "string",
      "expiration": "string"
    }
  },
  "adm_dbmserr": {
    "attributes": {
      "id": "number",
      "site": "number",
      "code": "string",
      "text": "string"
    }
  },
  "adm_dbparameter": {
    "attributes": {
      "id": "number",
      "site": "number",
      "code": "string",
      "text": "string",
      "comment": "string",
      "version": "string"
    }
  },
  "adm_message": {
    "attributes": {
      "id": "number",
      "site": "number",
      "code": "string",
      "text": "string"
    }
  },
  "adm_paruser": {
    "attributes": {
      "id": "number",
      "site": "number",
      "par": "number",
      "user": "number",
      "begda": "string",
      "endda": "string"
    }
  },
  "adm_roll": {
    "attributes": {
      "id": "number",
      "site": "number",
      "code": "string",
      "name": "string",
      "strukturna": "string",
      "valid": "number"
    }
  },
  "adm_rollact": {
    "attributes": {
      "id": "number",
      "site": "number",
      "roll": "number",
      "action": "number"
    }
  },
  "adm_rolllink": {
    "attributes": {
      "id": "number",
      "site": "number",
      "roll1": "number",
      "roll2": "number",
      "link": "string"
    }
  },
  "adm_rollstr": {
    "attributes": {
      "id": "number",
      "site": "number",
      "code": "string",
      "name": "string"
    }
  },
  "adm_user": {
    "attributes": {
      "id": "numeric",
      "site": "numeric",
      "username": "string",
      "password": "string",
      "firstname": "string",
      "lastname": "string",
      "sapuser": "string",
      "aduser": "string",
      "tip": "string",
      "admin": "numeric",
      "mail": "string",
      "usergrp": "numeric",
      "valid": "numeric",
      "created_at": "string",
      "updated_at": "string"
    }
  },
  "adm_usergrp": {
    "attributes": {
      "id": "numeric",
      "site": "numeric",
      "code": "string",
      "text": "string",
      "valid": "numeric"
    }
  },
  "adm_userlink": {
    "attributes": {
      "id": "numeric",
      "site": "numeric",
      "usr1": "numeric",
      "usr2": "string",
      "begda": "string",
      "endda": "string",
      "all": "numeric"
    }
  },
  "adm_userlinkpremiss": {
    "attributes": {
      "id": "numeric",
      "site": "numeric",
      "userlink": "numeric",
      "userpermiss": "numeric"
    }
  },
  "adm_userloc": {
    "attributes": {
      "id": "numeric",
      "site": "numeric",
      "usr": "numeric",
      "loc": "numeric",
      "begda": "string",
      "endda": "string"
    }
  },
  "adm_userpermiss": {
    "attributes": {
      "id": "numeric",
      "site": "numeric",
      "usr": "numeric",
      "roll": "numeric"
    }
  }
}

export default {
  entitiesInfo,
}
