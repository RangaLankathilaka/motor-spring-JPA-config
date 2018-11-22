<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 7/20/18
 * Time: 3:58 PM
 */

interface CustomerBO
{

    public function getCustomersCount();

    public function getAllCustomers();

    public function deleteCustomer($id);

    public function saveCustomer($id,$name,$address);

}