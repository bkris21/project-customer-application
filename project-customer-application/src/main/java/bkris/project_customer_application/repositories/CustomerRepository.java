package bkris.project_customer_application.repositories;

import bkris.project_customer_application.entities.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<CustomerEntity, Long> {

    @Query("select c from CustomerEntity c join fetch c.projects")
    CustomerEntity findByNameAndContact(@Param("customer_name") String name, @Param("contact") String contact);
}
