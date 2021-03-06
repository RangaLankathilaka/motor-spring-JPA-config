<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 7/20/18
 * Time: 3:58 PM
 */

require_once __DIR__ . '/../CustomerBO.php';
require_once __DIR__ . '/../../repository/impl/CustomerRepositoryImpl.php';
require_once __DIR__ . '/../../db/DBConnection.php';

class CustomerBOImpl implements CustomerBO
{

    private $customerRepository;

    public function __construct()
    {
        $this->customerRepository = new CustomerRepositoryImpl();

    }

    public function getCustomersCount()
    {
        $connection = (new DBConnection())->getConnection();
        $this->customerRepository->setConnection($connection);

        $count =  count($this->customerRepository->findAllCustomers());

        mysqli_close($connection);

        return $count;
    }

    public function getAllCustomers()
    {

        $connection = (new DBConnection())->getConnection();
        $this->customerRepository->setConnection($connection);

        $customers = $this->customerRepository->findAllCustomers();

        mysqli_close($connection);

        return $customers;
    }

    public function deleteCustomer($id)
    {

        $connection = (new DBConnection())->getConnection();
        $this->customerRepository->setConnection($connection);

        $result = $this->customerRepository->deleteCustomer($id);

        mysqli_close($connection);

        return $result;
    }

    public function saveCustomer($id, $name, $address)
    {
        $connection = (new DBConnection())->getConnection();
        $this->customerRepository->setConnection($connection);

        $result = $this->customerRepository->saveCustomer($id,$name,$address);

        mysqli_close($connection);

        return $result;

    }
}