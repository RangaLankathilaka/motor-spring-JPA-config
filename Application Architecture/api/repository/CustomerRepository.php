<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 7/20/18
 * Time: 3:41 PM
 */

interface CustomerRepository
{

    public function setConnection(mysqli $connection);

    public function saveCustomer($id,$name,$address);

    public function updateCustomer($id, $name, $address);

    public function deleteCustomer($id);

    public function findCustomer($id);

    public function findAllCustomers();

}