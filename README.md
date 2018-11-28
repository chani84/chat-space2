## members table

| Column | Type | Options |
| ------ | ---- | ------- |
| user_id | integer | null : false, foreign_key :true |
| group_id | integer | null : false, foreign_key :true |

### Association
- belongs_to : group
- belongs_to : user


## messages table

| Column | Type | Options |
| ------ | ---- | ------- |
|  body  | text | null : false |
| image | string | null : false |
| group_id | integer | null : false, foreign_key : true |
| user_id | integer | null : false, foreign_key : true |

### Association
- belongs_to : group
- belongs_to : user


## users table

| Column | Type | Options |
| ------ | ---- | ------- |
| name | string | index : true, null : false, unique : true |
| mail | string | null : false |

### Association

has_many : groups, through : members
has_many : messages
has_many : members
