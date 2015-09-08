<?php

namespace API\Model;

use Illuminate\Database\Capsule\Manager as DB;
use Illuminate\Database\Eloquent\Model;

class User extends Model {
   protected $table = 'user';
   public $timestamps = false;
   protected $visible = ['id', 'email', 'username',
                         'realname', 'location', 'website'];

   public function externalAccounts() {
      return $this->hasMany('\API\Model\UserExternalAccount');
   }

   public function setPassword($password) {
      $this->password = password_hash($password, PASSWORD_BCRYPT);
   }

   public function assertPasswordIs($password) {
      return password_verify($password, $this->password);
   }
}