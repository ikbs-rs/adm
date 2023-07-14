const entitiesInfo = 
  {
    "adm_action": {
      "attributes": {
        "id": "number",
        "site": "number",
        "code": "string",
        "text": "string",
        "valid": "number"
      }
    },
    "adm_blacklist_token": {
      "attributes": {
        "id": "number",
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
        "usr": "number",
        "begda": "string",
        "endda": "string"
      }
    },
    "adm_roll": {
      "attributes": {
        "id": "number",
        "site": "number",
        "code": "string",
        "text": "string",
        "strukturna": "string",
        "valid": "number"
      }
    },
    "adm_rollact": {
      "attributes": {
        "id": "number",
        "site": "number",
        "roll": "number",
        "action": "number",
        "cre_action": "number",
        "upd_action": "number",
        "del_action": "number",
        "exe_action": "number",
        "all_action": "number"
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
        "roll": "number",
        "onoff": "number",
        "hijerarhija": "number",
        "objtp": "string",
        "obj": "string"
      }
    },
    "adm_user": {
      "attributes": {
        "id": "number",
        "site": "number",
        "username": "string",
        "password": "string",
        "firstname": "string",
        "lastname": "string",
        "sapuser": "string",
        "aduser": "string",
        "tip": "string",
        "admin": "number",
        "mail": "string",
        "usergrp": "number",
        "valid": "number",
        "created_at": "string",
        "updated_at": "string"
      }
    },
    "adm_usergrp": {
      "attributes": {
        "id": "number",
        "site": "number",
        "code": "string",
        "text": "string",
        "valid": "number"
      }
    },
    "adm_userlink": {
      "attributes": {
        "id": "number",
        "site": "number",
        "user1": "number",
        "user2": "string",
        "begda": "string",
        "endda": "string",
        "all": "number"
      }
    },
    "adm_userlinkpremiss": {
      "attributes": {
        "id": "number",
        "site": "number",
        "userlink": "number",
        "userpermiss": "number"
      }
    },
    "adm_userloc": {
      "attributes": {
        "id": "number",
        "site": "number",
        "usr": "number",
        "loc": "number",
        "begda": "string",
        "endda": "string"
      }
    },
    "adm_userpermiss": {
      "attributes": {
        "id": "number",
        "site": "number",
        "usr": "number",
        "roll": "number"
      }
    },
    "adm_actionx": {
      "attributes": {
        "id": "number",
        "site": "number",
        "tableid": "number",
        "lang": "string",
        "grammcase": "number",
        "text": "string"
      }
    },
    "adm_rollx": {
      "attributes": {
        "id": "number",
        "site": "number",
        "tableid": "number",
        "lang": "string",
        "grammcase": "number",
        "text": "string"
      }
    },
    "adm_usergrpx": {
      "attributes": {
        "id": "number",
        "site": "number",
        "tableid": "number",
        "lang": "string",
        "grammcase": "number",
        "text": "string"
      }
    }
  }
export default {
  entitiesInfo,
}
