package com.project.student.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.student.entity.TransactionStatus;
import com.project.student.service.TransactionStatusService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin("*")
@RequiredArgsConstructor
public class TransactionStatusController {

    private final TransactionStatusService statusService;

    @PostMapping
    public TransactionStatus updateStatus(@RequestBody TransactionStatus status) {
        return statusService.updateStatus(status);
    }

    @GetMapping
    public List<TransactionStatus> getAllTransactions() {
        return statusService.getAllTransactions();
    }

    @GetMapping("/bill/{billId}")
    public List<TransactionStatus> getByBill(@PathVariable Long billId) {
        return statusService.getByFeeBill(billId);
    }
}
