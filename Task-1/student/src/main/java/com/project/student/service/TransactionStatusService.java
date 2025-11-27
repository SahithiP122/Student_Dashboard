package com.project.student.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.student.entity.TransactionStatus;
import com.project.student.repository.TransactionStatusRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TransactionStatusService {

    private final TransactionStatusRepository statusRepository;

    public TransactionStatus updateStatus(TransactionStatus status) {
        return statusRepository.save(status);
    }

    public List<TransactionStatus> getByFeeBill(Long feeBillId) {
        return statusRepository.findByFeeBillId(feeBillId);
    }

     public List<TransactionStatus> getAllTransactions() {
        return statusRepository.findAll();
    }
}
