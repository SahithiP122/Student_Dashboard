package com.project.student.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.student.entity.FeeBill;

public interface FeeBillRepository extends JpaRepository<FeeBill, Long> {
    List<FeeBill> findByStudentId(Long studentId);
}
