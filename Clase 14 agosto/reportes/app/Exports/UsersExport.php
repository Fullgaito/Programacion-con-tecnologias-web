<?php

namespace App\Exports;
use App\Models\User;
use Maatwebsite\Excel\Concerns\FromCollection;

class UsersExport implements FromCollection
{
    protected $userId;
    /**
    * @return \Illuminate\Support\Collection
    */
    //Constructor para recibirnel ID del usuario
    public function __construct($userId)
    {
        $this->userId=$userId;
    }
    public function collection()
    {
        //Retorna solo el usuario con el ID proporcionado
        return User::where('id',$this->userId)->get();
    }
}
