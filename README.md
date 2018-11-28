## members table

| Column | Type | Options |
| ------ | ---- | ------- |
| user_id | integer | null : false, foreign_key :true |
| group_id | integer | null : false, foreign_key :true |

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


## groups table

| Column | Type | Options |
| ------ | ---- | ------- |
| group_name | string | index : true, null : false, unique : true |
| group_mail | string | null : false |

### Association
has_many : users, through : members
has_many : messages
has_many : members


## messages table

| Column | Type | Options |
| ------ | ---- | ------- |
|  body  | text | |
| image | string | |
| group_id | integer | null : false, foreign_key : true |
| user_id | integer | null : false, foreign_key : true |

### Association
- belongs_to : group
- belongs_to : user
