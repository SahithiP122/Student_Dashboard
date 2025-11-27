package com.project.student.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.student.entity.FeeBill;
import com.project.student.repository.FeeBillRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FeeBillService {

    private final FeeBillRepository feeBillRepository;

    public FeeBill createFeeBill(FeeBill bill) {
        return feeBillRepository.save(bill);
    }

    public List<FeeBill> getBillsForStudent(Long studentId) {
        return feeBillRepository.findByStudentId(studentId);
    }

    public List<FeeBill> getAll() {
        return feeBillRepository.findAll();
    }
}
