package com.project.student.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.student.entity.TransactionStatus;

public interface TransactionStatusRepository extends JpaRepository<TransactionStatus, Long> {
    List<TransactionStatus> findByFeeBillId(Long feeBillId);
}
